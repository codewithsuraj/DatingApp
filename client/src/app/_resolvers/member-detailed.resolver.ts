import { MembersService } from './../_services/members.service';
import { Member } from 'src/app/_models/member';
import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberDetailedResolver implements Resolve<Member> {
  
  constructor(private membersService: MembersService) { }

  resolve(route: ActivatedRouteSnapshot): Member | Observable<Member> {
    return this.membersService.getMember(route.paramMap.get('username') || '');
  }
 
}
