package com.fcproject.controller;

import com.fcproject.model.Member;
import com.fcproject.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
    public void saveMemberType(@Valid @RequestBody Member member) {
        memberService.saveMember(member);
    }
}
