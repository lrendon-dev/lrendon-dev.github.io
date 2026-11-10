import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { NAV_ITEMS, PROFILE } from './data/portfolio.data';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the name in the main heading', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(PROFILE.displayName);
  });

  it('should render a section for every navigation item', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    for (const item of NAV_ITEMS) {
      expect(compiled.querySelector(`section#${item.id}`), item.id).not.toBeNull();
    }
  });
});
