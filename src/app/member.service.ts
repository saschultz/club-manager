import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) { 
    this.members = database.list('members');
  }
}
