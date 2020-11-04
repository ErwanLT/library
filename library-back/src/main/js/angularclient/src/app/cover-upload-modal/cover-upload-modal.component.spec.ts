import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverUploadModalComponent } from './cover-upload-modal.component';

describe('CoverUploadModalComponent', () => {
  let component: CoverUploadModalComponent;
  let fixture: ComponentFixture<CoverUploadModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverUploadModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverUploadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
