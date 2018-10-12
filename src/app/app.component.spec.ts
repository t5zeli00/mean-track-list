import { TestBed, async } from '@angular/core/testing';
<<<<<<< HEAD

=======
>>>>>>> 90e2d0beb865a61f222af7fab414445eb370e72f
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

<<<<<<< HEAD
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'track-app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('track-app');
  }));

  it('should render title in a h1 tag', async(() => {
=======
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'track-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('track-app');
  });

  it('should render title in a h1 tag', () => {
>>>>>>> 90e2d0beb865a61f222af7fab414445eb370e72f
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to track-app!');
<<<<<<< HEAD
  }));
=======
  });
>>>>>>> 90e2d0beb865a61f222af7fab414445eb370e72f
});
