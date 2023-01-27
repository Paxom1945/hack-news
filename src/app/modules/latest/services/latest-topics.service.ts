import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_OPTIONS } from 'src/app/shared/consts/api-options.const';
import { environment } from 'src/environments/environment';

// TODO: нахуя этот сервис если есть TopicsService
@Injectable()
export class LatestTopicsService {
  private endPoints = {
    latest: 'newstories',
  };
  constructor(private http: HttpClient) {}

  public getLatestTopics(): Observable<number[]> {
    return this.http.get<number[]>(
      environment.api + this.endPoints.latest + API_OPTIONS
    );
  }
}
