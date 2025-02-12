import envConfig from "@/src/config/envConfig";
import { delay } from "@/src/utils/delay";

export const getRecentPost = async () => {
  const res = await fetch(
    // eslint-disable-next-line prettier/prettier
    `${envConfig.baseApi}/items?sortBy=-createdAt&limit=9`
  );

  await delay(5000);

  return res.json();
};
