import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardSkeletonComponent } from './user-card-skeleton.component';

describe('UserCardSkeletonComponent', () => {
  let component: UserCardSkeletonComponent;
  let fixture: ComponentFixture<UserCardSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCardSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
