const getRepos = require('./getRepos');
const url = 'https://api.github.com/orgs/tryber/repos';

describe('test getRepos', () => {
  it('tests if "sd-01-week4-5-project-todo-list" is on the list', async () => {
    await expect(getRepos(url)).resolves.toContain('sd-01-week4-5-project-todo-list');
  });
  it('tests if "sd-01-week4-5-project-meme-generator" is on the list', async () => {
    await expect(getRepos(url)).resolves.toContain('sd-01-week4-5-project-meme-generator');
  });
});