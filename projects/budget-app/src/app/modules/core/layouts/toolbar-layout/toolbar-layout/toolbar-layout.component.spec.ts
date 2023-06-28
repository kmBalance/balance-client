import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarLayoutComponent } from './toolbar-layout.component';

describe('ToolbarLayoutComponent', () => {
  let component: ToolbarLayoutComponent;
  let fixture: ComponentFixture<ToolbarLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarLayoutComponent]
    });
    fixture = TestBed.createComponent(ToolbarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
