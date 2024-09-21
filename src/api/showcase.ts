import axios from "axios";

export const getShowcase = (repository: string) => {
  console.log(`Fetching ${repository}\n`);
  return axios
    .get("https://cms.lamanhub.site/api/showcases", {
      params: {
        populate: "*",
        filters: {
          repository: {
            $eq: repository,
          },
        },
      },
    })
    .then((response) => {
      if (!response.data.data.length) {
        throw new Error("Showcase not found");
      }

      return response.data.data[0];
    });
};
