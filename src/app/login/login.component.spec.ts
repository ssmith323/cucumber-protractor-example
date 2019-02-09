import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { CoreModule } from '../core/core.module';
import { LoginService } from '../shared/login.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockLoginService;

  beforeEach(async(() => {
    mockLoginService = jasmine.createSpyObj(['login']);

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        CoreModule,
        RouterTestingModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: LoginService, useValue: mockLoginService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a username field', () => {
    expect(fixture.debugElement.query(By.css('#username'))).toBeTruthy();
  });

  it('should have a password field', () => {
    expect(fixture.debugElement.query(By.css('#password'))).toBeTruthy();
  });

  it('should have a submit button', () => {
    expect(fixture.debugElement.query(By.css('#submit'))).toBeTruthy();
  });

  it('should submit a user when they pass in valid creditials', () => {
    mockLoginService.login.and.returnValue(Promise.resolve());
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    // fixture.debugElement.query(By.css('#submit')).nativeElement.click();
    component.loginUser();
    expect(navigateSpy).toHaveBeenCalledWith(['/my-account']);
  });
});
