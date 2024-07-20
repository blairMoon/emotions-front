export const useNavigateExternal = () => {
  return (url) => {
    window.location.href = url;
  };
};