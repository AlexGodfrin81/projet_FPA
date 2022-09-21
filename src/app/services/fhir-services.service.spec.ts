import { TestBed } from '@angular/core/testing';

import { FhirServicesService } from './fhir-services.service';

describe('FhirServicesService', () => {
  let service: FhirServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FhirServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
