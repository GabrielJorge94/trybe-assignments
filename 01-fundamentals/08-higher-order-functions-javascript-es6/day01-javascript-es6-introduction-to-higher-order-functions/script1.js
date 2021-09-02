const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro'), 
    id2: callback('Luiza'), 
    id3: callback('Carla'), 
  };
  return employees;
};

const callback = (name) => {
  return {
    nomeCompleto: name,
    email: `${name}@trybe.com.br`,
  };
};

console.log(newEmployees(callback));
