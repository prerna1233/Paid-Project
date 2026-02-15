/**
 * Blog Service
 * Business logic for blog operations
 * Handles both public and admin blog operations
 */

import Blog from "./blog.model.js";

export class BlogService {
  /**
   * Get all published blogs (public) with full interactions
   */
  async getAllPublishedBlogs() {
    return await Blog.find({ published: true })
      .sort({ createdAt: -1 })
      .populate("author", "name email")
      .populate("likes", "name email")
      .populate("comments.user", "name email");
  }

  /**
   * Get all blogs including unpublished (admin) with full interactions
   */
  async getAllBlogs() {
    return await Blog.find()
      .sort({ createdAt: -1 })
      .populate("author", "name email")
      .populate("likes", "name email")
      .populate("comments.user", "name email");
  }

  /**
   * Get blog by ID (public) with full interactions
   */
  async getBlogById(id) {
    const blog = await Blog.findById(id)
      .populate("author", "name email")
      .populate("likes", "name email")
      .populate("comments.user", "name email");
    
    if (!blog) {
      const err = new Error("Blog not found");
      err.statusCode = 404;
      throw err;
    }
    return blog;
  }

  /**
   * Create new blog
   */
  async createBlog(blogData, userId) {
    const { title, content } = blogData;

    if (!title || !content) {
      throw new Error("Title and content are required");
    }

    const blog = await Blog.create({
      title,
      content,
      author: userId
    });

    return await blog.populate("author", "name email");
  }

  /**
   * Get blogs by user with full interactions
   */
  async getBlogsByUser(userId) {
    return await Blog.find({ author: userId })
      .sort({ createdAt: -1 })
      .populate("author", "name email")
      .populate("likes", "name email")
      .populate("comments.user", "name email");
  }

  /**
   * Update blog
   */
  async updateBlog(id, blogData, userId = null) {
    // If userId is provided, ensure user owns the blog
    const query = userId ? { _id: id, author: userId } : { _id: id };
    
    const blog = await Blog.findOne(query);
    if (!blog) {
      throw new Error("Blog not found or unauthorized");
    }

    // Don't allow updating author field
    const { author, ...updateData } = blogData;

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    ).populate("author", "name email");

    return updatedBlog;
  }

  /**
   * Delete blog
   */
  async deleteBlog(id, userId = null) {
    // If userId is provided, ensure user owns the blog
    const query = userId ? { _id: id, author: userId } : { _id: id };
    
    const blog = await Blog.findOneAndDelete(query);
    if (!blog) {
      throw new Error("Blog not found or unauthorized");
    }

    return { message: "Blog deleted successfully" };
  }

  /**
   * Like a blog
   */
  async likeBlog(blogId, userId) {
    const blog = await Blog.findById(blogId);
    
    if (!blog) {
      throw new Error("Blog not found");
    }

    // Check if user already liked
    const alreadyLiked = blog.likes.includes(userId);
    
    if (alreadyLiked) {
      // Unlike: Remove user from likes
      blog.likes = blog.likes.filter(id => id.toString() !== userId.toString());
    } else {
      // Like: Add user to likes
      blog.likes.push(userId);
    }

    await blog.save();
    
    return {
      message: alreadyLiked ? "Blog unliked" : "Blog liked",
      liked: !alreadyLiked,
      likeCount: blog.likes.length
    };
  }

  /**
   * Add comment to blog
   */
  async addComment(blogId, userId, commentText) {
    const blog = await Blog.findById(blogId);
    
    if (!blog) {
      throw new Error("Blog not found");
    }

    const comment = {
      user: userId,
      text: commentText,
      createdAt: new Date()
    };

    blog.comments.push(comment);
    await blog.save();

    // Re-fetch the blog with populated user data
    const populatedBlog = await Blog.findById(blogId)
      .populate('comments.user', 'name email');

    const addedComment = populatedBlog.comments[populatedBlog.comments.length - 1];

    return {
      message: "Comment added successfully",
      comment: addedComment,
      commentCount: populatedBlog.comments.length
    };
  }

  /**
   * Delete comment from blog (user can only delete own comments)
   */
  async deleteComment(blogId, commentId, userId) {
    const blog = await Blog.findById(blogId);
    
    if (!blog) {
      const err = new Error("Blog not found");
      err.statusCode = 404;
      throw err;
    }

    const comment = blog.comments.id(commentId);
    
    if (!comment) {
      const err = new Error("Comment not found");
      err.statusCode = 404;
      throw err;
    }

    // Check if user owns the comment
    if (comment.user.toString() !== userId.toString()) {
      const err = new Error("Unauthorized to delete this comment");
      err.statusCode = 403;
      throw err;
    }

    console.debug(`[BlogService] deleteComment: blogId=${blogId} commentId=${commentId} originalCount=${blog.comments.length}`);
    console.debug('[BlogService] comments ids:', blog.comments.map(c => String(c._id)).slice(0,10));

    // remove comment (use filter to be robust in case subdoc methods are unavailable)
    const originalCount = blog.comments.length;
    blog.comments = blog.comments.filter(c => c._id.toString() !== commentId.toString());
    if (blog.comments.length === originalCount) {
      const err = new Error('Comment not found');
      err.statusCode = 404;
      throw err;
    }
    await blog.save();

    console.debug(`[BlogService] deleteComment: removed, newCount=${blog.comments.length}`);

    return {
      message: "Comment deleted successfully",
      commentCount: blog.comments.length
    };
  }

  /**
   * Delete any comment from blog (admin only)
   */
  async deleteCommentAdmin(blogId, commentId) {
    const blog = await Blog.findById(blogId);
    
    if (!blog) {
      const err = new Error("Blog not found");
      err.statusCode = 404;
      throw err;
    }

    const comment = blog.comments.id(commentId);
    
    if (!comment) {
      const err = new Error("Comment not found");
      err.statusCode = 404;
      throw err;
    }

    console.debug(`[BlogService] deleteCommentAdmin: blogId=${blogId} commentId=${commentId} originalCount=${blog.comments.length}`);
    console.debug('[BlogService] comments ids:', blog.comments.map(c => String(c._id)).slice(0,10));

    // Admin can delete any comment - remove by filtering to avoid subdoc method issues
    const originalCount = blog.comments.length;
    blog.comments = blog.comments.filter(c => c._id.toString() !== commentId.toString());
    if (blog.comments.length === originalCount) {
      const err = new Error('Comment not found');
      err.statusCode = 404;
      throw err;
    }
    await blog.save();

    console.debug(`[BlogService] deleteCommentAdmin: removed, newCount=${blog.comments.length}`);

    return {
      message: "Comment deleted successfully by admin",
      commentCount: blog.comments.length
    };
  }

  /**
   * Get blog with likes and comments populated
   */
  async getBlogWithInteractions(id) {
    const blog = await Blog.findById(id)
      .populate("author", "name email")
      .populate("likes", "name email")
      .populate("comments.user", "name email");
    
    if (!blog) {
      throw new Error("Blog not found");
    }
    
    return blog;
  }
}

export default new BlogService();
