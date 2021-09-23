const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('Dada a URL https://api.github.com/orgs/tryber/repos , faça um teste que verifique que o repositório sd-01-week4-5-project-todo-list esta presente na lista', () => {
  it('verique que o repositórios sd-01-week4-5-project-todo-list existe na lista', async () => {
    await expect(
      getRepos('https://api.github.com/orgs/tryber/repos')
    ).resolves.toContain('sd-01-week4-5-project-todo-list');
  });
});
describe('Dada a URL https://api.github.com/orgs/tryber/repos , faça um teste que verifique que o repositório sd-01-week4-5-project-meme-generator esta presente na lista', () => {
  it('verique que o repositórios sd-01-week4-5-project-meme-generator existe na lista', async () => {
    await expect(
      getRepos('https://api.github.com/orgs/tryber/repos')
    ).resolves.toContain('sd-01-week4-5-project-meme-generator');
  });
});
