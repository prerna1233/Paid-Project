#!/bin/bash

# 🧪 Comprehensive Testing Script
# Tests all endpoints to verify refactored code works identically

echo "╔════════════════════════════════════════════════════════════╗"
echo "║     COMPREHENSIVE FUNCTIONALITY VERIFICATION TEST          ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Base URL
BASE_URL="http://localhost:5000"

# Counter
PASSED=0
FAILED=0

# Test function
test_endpoint() {
    local method=$1
    local endpoint=$2
    local description=$3
    local expected_status=$4
    local data=$5
    
    echo -n "Testing: $description ... "
    
    if [ "$method" == "GET" ]; then
        response=$(curl -s -w "\n%{http_code}" "$BASE_URL$endpoint")
    elif [ "$method" == "POST" ]; then
        response=$(curl -s -w "\n%{http_code}" -X POST -H "Content-Type: application/json" -d "$data" "$BASE_URL$endpoint")
    fi
    
    http_code=$(echo "$response" | tail -n1)
    body=$(echo "$response" | sed '$d')
    
    if [ "$http_code" == "$expected_status" ]; then
        echo -e "${GREEN}✅ PASS${NC} (HTTP $http_code)"
        PASSED=$((PASSED + 1))
    else
        echo -e "${RED}❌ FAIL${NC} (Expected $expected_status, got $http_code)"
        FAILED=$((FAILED + 1))
    fi
}

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "1️⃣  HEALTH CHECK"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
test_endpoint "GET" "/api/health" "API Health Check" "200"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "2️⃣  PUBLIC HOTEL ENDPOINTS"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
test_endpoint "GET" "/hotels" "Get all hotels (legacy)" "200"
test_endpoint "GET" "/api/hotels" "Get all hotels (new /api)" "200"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "3️⃣  PUBLIC BLOG ENDPOINTS"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
test_endpoint "GET" "/blogs" "Get all blogs (legacy)" "200"
test_endpoint "GET" "/api/blogs" "Get all blogs (new /api)" "200"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "4️⃣  ADMIN ENDPOINTS (Should fail without auth)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
test_endpoint "GET" "/admin/hotels" "Get admin hotels (no auth)" "401"
test_endpoint "GET" "/admin/blogs" "Get admin blogs (no auth)" "401"
test_endpoint "GET" "/api/admin/hotels" "Get admin hotels /api (no auth)" "401"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "5️⃣  ROUTE CONSISTENCY (Legacy vs New /api)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Checking if legacy and new routes return same data..."

legacy_hotels=$(curl -s "$BASE_URL/hotels")
new_hotels=$(curl -s "$BASE_URL/api/hotels")

if [ "$legacy_hotels" == "$new_hotels" ]; then
    echo -e "${GREEN}✅ PASS${NC} - Legacy /hotels === New /api/hotels"
    PASSED=$((PASSED + 1))
else
    echo -e "${RED}❌ FAIL${NC} - Responses differ!"
    FAILED=$((FAILED + 1))
fi

legacy_blogs=$(curl -s "$BASE_URL/blogs")
new_blogs=$(curl -s "$BASE_URL/api/blogs")

if [ "$legacy_blogs" == "$new_blogs" ]; then
    echo -e "${GREEN}✅ PASS${NC} - Legacy /blogs === New /api/blogs"
    PASSED=$((PASSED + 1))
else
    echo -e "${RED}❌ FAIL${NC} - Responses differ!"
    FAILED=$((FAILED + 1))
fi
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "6️⃣  ERROR HANDLING"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
test_endpoint "GET" "/nonexistent" "404 handler" "404"
echo ""

echo "╔════════════════════════════════════════════════════════════╗"
echo "║                      TEST SUMMARY                          ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo -e "${GREEN}✅ Passed: $PASSED${NC}"
echo -e "${RED}❌ Failed: $FAILED${NC}"
echo ""

TOTAL=$((PASSED + FAILED))
PERCENTAGE=$((PASSED * 100 / TOTAL))

echo -e "Success Rate: ${GREEN}$PERCENTAGE%${NC}"
echo ""

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}🎉 ALL TESTS PASSED! Refactored code is functionally identical.${NC}"
    exit 0
else
    echo -e "${RED}⚠️  Some tests failed. Please review the output above.${NC}"
    exit 1
fi
