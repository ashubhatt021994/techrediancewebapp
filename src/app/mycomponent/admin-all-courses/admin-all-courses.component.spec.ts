import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllCoursesComponent } from './admin-all-courses.component';

describe('AdminAllCoursesComponent', () => {
  let component: AdminAllCoursesComponent;
  let fixture: ComponentFixture<AdminAllCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAllCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
