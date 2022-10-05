import { Component, OnInit } from '@angular/core';
import { UUIDService } from 'src/app/core/uuid.service';

@Component({
  selector: 'app-uuid',
  templateUrl: './uuid.component.html',
  styleUrls: ['./uuid.component.scss'],
})
export class UuidComponent implements OnInit {
  public v4: string = '';
  public v1: string = '';

  constructor(private uuidService: UUIDService) {}

  ngOnInit(): void {
    this.generate();
  }

  public generate(): void {
    this.v4 = this.uuidService.v4();
    this.v1 = this.uuidService.v1();
  }
}
