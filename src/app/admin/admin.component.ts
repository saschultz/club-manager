import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(
    name: string,
    bio: string,
    medium: string,
    image: string,
    email: string
  ) {
    var newMember: Member = new Member(name, bio, medium, image, email);
    this.memberService.addMember(newMember);
  }

}
