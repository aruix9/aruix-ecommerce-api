# Ecommerce API Documentation

## Base URL

```
http://localhost:8000/api/v1/
```

---

## **Users**

### 1. Get All Users

**Endpoint:**
`GET /users/`
**Authorization:**
Bearer Token

---

### 2. Get User By ID

**Endpoint:**
`GET /users/{userId}`
**Authorization:**
Bearer Token

---

### 3. Create User

**Endpoint:**
`POST /users/`
**Authorization:**
Bearer Token
**Request Body:**

```json
{
  "name": "Arun Manager",
  "email": "arunb@gmail.com",
  "password": "Test@123",
  "passwordConfirm": "Test@123",
  "role": "manager"
}
```

---

### 4. Update User By ID

**Endpoint:**
`PUT /users/{userId}`
**Authorization:**
Bearer Token
**Request Body:**

```json
{
  "name": "Ayjae",
  "email": "arunj@gmail.com"
}
```

---

### 5. Delete User By ID

**Endpoint:**
`DELETE /users/{userId}`
**Authorization:**
Bearer Token

---

## **Authentication**

### 1. Login

**Endpoint:**
`POST /auth/login`
**Request Body (Admin/Manager/User):**

```json
{
  "email": "admin@example.com",
  "password": "Test@123"
}
```

---

### 2. Sign Up

**Endpoint:**
`POST /auth/signup`
**Request Body:**

```json
{
  "name": "Arun User2",
  "email": "arunbus2@gmail.com",
  "password": "Test@123",
  "passwordConfirm": "Test@123"
}
```

---

### 3. Forgot Password

**Endpoint:**
`POST /auth/forgotPassword`
**Request Body:**

```json
{
  "email": "user@example.com"
}
```

---

### 4. Verify Reset Code

**Endpoint:**
`POST /auth/verifyResetCode`
**Request Body:**

```json
{
  "resetCode": "978377"
}
```

---

### 5. Reset Password

**Endpoint:**
`PUT /auth/resetPassword`
**Request Body:**

```json
{
  "email": "user@example.com",
  "newPassword": "NewPassword@123"
}
```

---

## **Brands**

### 1. Get All Brands

**Endpoint:**
`GET /brands/`

---

### 2. Get Brand By ID

**Endpoint:**
`GET /brands/{brandId}`

---

### 3. Create a Brand

**Endpoint:**
`POST /brands/`
**Authorization:**
Bearer Token
**Request Body:**

```json
{
  "name": "Zara"
}
```

---

### 4. Update Brand By ID

**Endpoint:**
`PUT /brands/{brandId}`
**Authorization:**
Bearer Token
**Request Body:**

```json
{
  "name": "Triple S"
}
```

---

### 5. Delete Brand By ID

**Endpoint:**
`DELETE /brands/{brandId}`
**Authorization:**
Bearer Token

---

## **Categories**

### 1. Get All Categories

**Endpoint:**
`GET /categories`

---

### 2. Get Category By ID

**Endpoint:**
`GET /categories/{categoryId}`

---

### 3. Create a Category

**Endpoint:**
`POST /categories/`
**Authorization:**
Bearer Token
**Request Body:**

```json
{
  "name": "Clothing"
}
```

---

### 4. Update Category By ID

**Endpoint:**
`PUT /categories/{categoryId}`
**Authorization:**
Bearer Token
**Request Body:**

```json
{
  "name": "Shoes"
}
```

---

### 5. Delete Category By ID

**Endpoint:**
`DELETE /categories/{categoryId}`
**Authorization:**
Bearer Token

---

## **Subcategories**

### 1. Get SubCategory By ID

**Endpoint:**
`GET /categories/{categoryId}/subcategories/{subcategoryId}`

---

### 2. Create a SubCategory

**Endpoint:**
`POST /categories/{categoryId}/subcategories/`
**Authorization:**
Bearer Token
**Request Body:**

```json
{
  "name": "Jeans"
}
```

---

### 3. Update SubCategory By ID

**Endpoint:**
`PUT /categories/{categoryId}/subcategories/{subcategoryId}`
**Authorization:**
Bearer Token
**Request Body:**

```json
{
  "name": "Trousers"
}
```

---

### 4. Delete SubCategory By ID

**Endpoint:**
`DELETE /categories/{categoryId}/subcategories/{subcategoryId}`
**Authorization:**
Bearer Token

---

## **Products**

### 1. Get All Products

**Endpoint:**
`GET /products/`

---

### 2. Get Product By ID

**Endpoint:**
`GET /products/{productId}`

---

### 3. Create a Product

**Endpoint:**
`POST /products/`
**Authorization:**
Bearer Token
**Request Body:**

```json
{
  "title": "Essence Mascara Lash Princess",
  "description": "Popular mascara known for volumizing.",
  "quantity": 50,
  "price": 9.99,
  "imageCover": "https://example.com/image.jpg",
  "category": "categoryId"
}
```

---

### 4. Update Product By ID

**Endpoint:**
`PUT /products/{productId}`
**Authorization:**
Bearer Token
**Request Body:**

```json
{
  "price": 19.99,
  "quantity": 100
}
```

---

### 5. Delete Product By ID

**Endpoint:**
`DELETE /products/{productId}`
**Authorization:**
Bearer Token

---

## **Reviews**

### 1. Get All Reviews

**Endpoint:**
`GET /reviews/`
**Authorization:**
Bearer Token

---

### 2. Add a Review

**Endpoint:**
`POST /reviews/`
**Authorization:**
Bearer Token
**Request Body:**

```json
{
  "user": "userId",
  "product": "productId",
  "ratings": 4
}
```

---

### 3. Update a Review By ID

**Endpoint:**
`PUT /reviews/{reviewId}`
**Authorization:**
Bearer Token
**Request Body:**

```json
{
  "ratings": 5
}
```

---

### 4. Delete a Review By ID

**Endpoint:**
`DELETE /reviews/{reviewId}`
**Authorization:**
Bearer Token
