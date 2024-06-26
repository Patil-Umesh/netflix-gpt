export const PLAY_BTN =
  "https://cdn-icons-png.flaticon.com/128/10860/10860787.png";
export const MORE_INFO =
  "https://cdn-icons-png.flaticon.com/128/15604/15604232.png";
export const LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const PROFILE_ICON =
  "https://cdn-icons-png.flaticon.com/128/4675/4675250.png";
export const NETFLIX_BG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_large.jpg";
export const POSTER_CDN = "https://image.tmdb.org/t/p/w500";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_API_KEY,
  },
};
export const SUPPORTED_LANG = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];
