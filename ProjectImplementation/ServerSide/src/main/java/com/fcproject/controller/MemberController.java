package com.fcproject.controller;

import com.fcproject.model.Member;
import com.fcproject.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

/**
 * Created by ozlemakbas on 05/04/16.
 */

@RestController
public class MemberController {
    private MemberService memberService;

    @Autowired
    public void setMemberService(MemberService memberService) {
        this.memberService = memberService;
    }

    @RequestMapping(value = "/members", method = RequestMethod.GET)
    public Iterable<Member> listAllMembers() {
        return memberService.listAllMembers();
    }

    @RequestMapping(value = "/addMember", method = RequestMethod.POST)
    public void saveMember(@Valid @RequestBody Member member) {
        memberService.saveMember(member);
    }

    @RequestMapping(value = "/members/{memberId}", method = RequestMethod.GET)
    public Member getMember(@PathVariable("memberId") int memberId) {
        Member member = memberService.getMemberById(memberId);
        //Todo: Exception
        return member;
    }

    @RequestMapping(value = "/membersforapprove", method = RequestMethod.GET)
    public Iterable<Member>  getMemberForApprove() { return memberService.listMembersForApprove(); }

    @RequestMapping(value = "/member/update/{id}", method = RequestMethod.PUT)
    public void updateMember(@PathVariable("id") int id, @RequestBody Member newMember) {
        memberService.updateMember(id, newMember);
    }

    @RequestMapping(value = "/members/findbyusername/{username}", method = RequestMethod.GET)
    public String getMemberByUsername(@PathVariable("username") String username) {
        Member member = memberService.findMemberUsername(username);
        //Todo: Exception
        return member.getPassword();
    }
}
