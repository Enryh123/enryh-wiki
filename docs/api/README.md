# API 文档

本章节包含所有 API 接口的详细文档。

## API 概览

我们提供以下 API 接口：

- 用户认证
- 数据查询
- 文件上传
- 实时通信

## 认证

所有 API 请求都需要包含认证信息：

```http
Authorization: Bearer <your-token>
```

## 基础 URL

```
https://api.example.com/v1
```

## 响应格式

所有 API 响应都使用 JSON 格式：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    // 具体数据
  }
}
```

## 错误处理

错误响应格式：

```json
{
  "code": 400,
  "message": "Bad Request",
  "error": "具体错误信息"
}
```

## 分页

支持分页的接口：

```http
GET /api/items?page=1&limit=10
```

参数说明：

- `page`: 页码，从 1 开始
- `limit`: 每页数量，最大 100

## 下一步

查看具体的 [端点文档](./endpoints.md) 了解详细接口信息。