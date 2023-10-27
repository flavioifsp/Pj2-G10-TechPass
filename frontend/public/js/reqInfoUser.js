async function requisitarInfoPforms(forms) {
  
    const infoUserAll = document.querySelector(forms);

    try {
      for (x of [...infoUserAll.querySelectorAll("input")]) {
        if (x.name !== "") {
          const infoSV = (
            await axios.get(
              `http://localhost:9000/api/user/infos/?${x.name}`,
              getCookie("token")
            )
          ).data[x.name];

          if (x.name == "nascimento") {
            x.value = new Date(infoSV).toISOString().split("T")[0];
          } else {
            x.value = infoSV;
          }
        }
      }
    } catch (error) {
      acionarerro(error);
    }
  
}


function arrayComValueForms(forms){
  const values = {}
  for (x of [...document.querySelector(forms).querySelectorAll("input")]) {
    values[x.id.toString().replace("#", "")] = x.value
  }

  return values
}