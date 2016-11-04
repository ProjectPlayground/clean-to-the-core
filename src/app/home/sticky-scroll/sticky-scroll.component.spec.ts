/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

import { StickyScrollComponent } from './sticky-scroll.component';
import { GlobalEventsService } from '../../core/global-events/global-events.service';
import { MockGlobalEventsService } from '../../core/global-events/mock-global-events.service.spec';

describe('StickyScrollComponent', () => {
  let component: StickyScrollComponent;
  let fixture: ComponentFixture<StickyScrollComponent>;
  let mockGlobalEventsService = new MockGlobalEventsService();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: GlobalEventsService, useValue: mockGlobalEventsService },
        { provide: 'Window', useValue: window }
      ],
      declarations: [ StickyScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set style to fixed', () => {
    component.stickyOffset = -50;
    mockGlobalEventsService.update();
    expect(component.fixed).toBe(true);
  });

  it('should remove fixed style', () => {
    let newPosition: string;
    // Set fixed
    component.stickyOffset = -50;
    mockGlobalEventsService.update();
    expect(component.fixed).toBe(true);
    // Remove fixed
    component.stickyOffset = 50;
    mockGlobalEventsService.update();
    expect(component.fixed).toBe(false);
  });

  it('should destroy the component', () => {
    component.stickyOffset = -50;
    mockGlobalEventsService.update();
    expect(component.fixed).toBe(true);
    component.ngOnDestroy();
    expect(component.fixed).toBe(false);
  });

  it('should update the height on manuel check', done => {
    component.height = 5;
    let positionContainer = fixture.nativeElement.getElementsByClassName('position-container')[0];
    positionContainer.style.height = '234px';
    expect(positionContainer.clientHeight).toBe(234);
    expect(component.height).toBe(5);
    component.manualHeightCheck();
    setTimeout( () => {
      expect(component.height).toBe(234);
      done();
    }, 0);
  });
});
