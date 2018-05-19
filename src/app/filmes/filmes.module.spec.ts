import { FilmesModule } from './filmes.module';

describe('FilmesModule', () => {
  let filmesModule: FilmesModule;

  beforeEach(() => {
    filmesModule = new FilmesModule();
  });

  it('should create an instance', () => {
    expect(filmesModule).toBeTruthy();
  });
});
