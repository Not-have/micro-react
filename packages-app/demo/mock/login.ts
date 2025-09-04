import {
  ParamsDataLogin
} from "@micro-umi/api";

export default {
  "POST /api/data-login": (_req: ParamsDataLogin, res: { json: (data: unknown) => void }) => {
    res.json({
      code: 200,
      data: {
        token: "token",
        refreshToken: "refresh-token"
      }
    });
  }
};
