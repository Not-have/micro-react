import {
  ParamsDataLogin
} from "@micro-umi/api";

export default {
  "POST /api/login": (req: ParamsDataLogin, res: { json: (data: unknown) => void }) => {
    res.json({
      code: 200,
      data: {
        token: req.username,
        refreshToken: req.password
      }
    });
  }
};
