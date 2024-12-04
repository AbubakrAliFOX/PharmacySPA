import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUserPage } from './show-user.page';

describe('ShowUserPage', () => {
  let component: ShowUserPage;
  let fixture: ComponentFixture<ShowUserPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowUserPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
