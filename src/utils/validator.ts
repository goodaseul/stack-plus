export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "올바른 이메일 형식이 아닙니다.";
  return "";
};

export const validatePassword = (password: string) => {
  const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;

  if (!pwRegex.test(password)) {
    return "비밀번호는 영문과 숫자를 포함한 6~20자여야 합니다.";
  }
  return "";
};

export const validateConfirmPassword = (password: string, confirm: string) => {
  if (!confirm.trim()) return "비밀번호 확인을 입력해주세요.";

  if (password !== confirm) return "비밀번호가 일치하지 않습니다.";

  return "";
};
