import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { RouterLinkStubDirective }   from '../testing';
import { RouterOutletStubComponent } from '../testing';

import { AppComponent } from './app.component';

describe('AppComponent (file template)', () => {

	let comp:    AppComponent;
	let fixture: ComponentFixture<AppComponent>;
	let de:      DebugElement;
	let el:      HTMLElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ AppComponent, 
			RouterLinkStubDirective, 
			RouterOutletStubComponent ] // declare the test component
		})
		.compileComponents()
		.then(() => {
			fixture = TestBed.createComponent(AppComponent);

			comp = fixture.componentInstance; // AppComponent test instance

			// query for the title <h1> by CSS element selector
			de = fixture.debugElement.query(By.css('h1'));
			el = de.nativeElement;
		});


		
	}));

	it('no title in the DOM until manually call `detectChanges`', () => {
	    expect(el.textContent).toEqual('');
	  });
	
	it('should display original title', () => {
		fixture.detectChanges();
		expect(el.textContent).toContain('Hospital Management');
	});


});