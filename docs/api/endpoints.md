# API 端点

本章节详细介绍所有可用的 API 端点。

## 用户认证

### 登录

```http
POST /auth/login
```

请求参数：

```json
{
  "username": "user@example.com",
  "password": "password123"
}
```

响应：

```json
{
  "code": 200,
  "message": "登录成功",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": 1,
      "username": "user@example.com",
      "name": "用户名"
    }
  }
}
```

### 注册

```http
POST /auth/register
```

请求参数：

```json
{
  "username": "user@example.com",
  "password": "password123",
  "name": "用户名"
}
```

## 数据查询

### 获取用户列表

```http
GET /users
```

查询参数：

- `page`: 页码（默认 1）
- `limit`: 每页数量（默认 10）

响应：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "users": [
      {
        "id": 1,
        "username": "user1@example.com",
        "name": "用户1"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 100,
      "pages": 10
    }
  }
}
```

### 获取单个用户

```http
GET /users/:id
```

响应：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": 1,
    "username": "user@example.com",
    "name": "用户名",
    "created_at": "2024-01-01T00:00:00Z"
  }
}
```

## 文件上传

### 上传文件

```http
POST /upload
Content-Type: multipart/form-data
```

表单字段：

- `file`: 文件内容
- `type`: 文件类型（可选）

响应：

```json
{
  "code": 200,
  "message": "上传成功",
  "data": {
    "url": "https://cdn.example.com/file.jpg",
    "filename": "file.jpg",
    "size": 102400
  }
}
```

## 错误码说明

| 错误码 | 描述 |
|--------|------|
| 400 | 请求参数错误 |
| 401 | 未授权 |
| 403 | 权限不足 |
| 404 | 资源不存在 |
| 500 | 服务器内部错误 |

## 测试工具

可以使用以下工具测试 API：

- [Postman](https://www.postman.com/)
- [curl](https://curl.se/)
- [HTTPie](https://httpie.io/)