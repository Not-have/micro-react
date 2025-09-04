export default {
  "GET /api/user-info": (req: unknown, res: { json: (data: unknown) => void }) => {
    res.json({
      code: 200,
      data: {
        username: "admin",
        email: "2236472089@qq.com",
        avatar: "https://avatars.githubusercontent.com/u/123456789?v=4",
        phone: "12345678901"
      }
    });
  }
};
