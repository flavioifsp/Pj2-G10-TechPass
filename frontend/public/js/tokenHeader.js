// pegar meu token no cookir (funcao pega do gpt)
function getCookie(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return {
      headers: {
        Authorization: `Bearer ${parts.pop().split(";").shift()}`,
      },
    };
  }
}
