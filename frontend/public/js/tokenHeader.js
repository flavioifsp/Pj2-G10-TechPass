// pegar meu token no cookir (funcao pega do gpt)
function getCookie() {
  const value = "; " + document.cookie;
  const parts = value.split("; " + "token" + "=");
  if (parts.length === 2) {
    return {
      headers: {
        Authorization: `Bearer ${parts.pop().split(";").shift()}`,
      },
    };
  }
}
