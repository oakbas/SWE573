package com.fcproject.service;

import com.fcproject.model.Member;
import com.fcproject.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by ozlemakbas on 08/04/16.
 */
@Service
public class MemberServiceImpl implements MemberService {

    private MemberRepository memberRepository;

    @Autowired
    public void setMemberRepository(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @Override
    public Iterable<Member> listAllMembers() {
        return memberRepository.findAll();
    }

    @Override
    public Member getMemberById(Integer id) {
        return memberRepository.findOne(id);
    }

    @Override
    public Member saveMember(Member member) { return memberRepository.save(member);}

    @Override
    public void updateMember(int id, Member newMember) {
        Member updatedMember = memberRepository.findOne(id);
        updatedMember.setMembership(newMember.getMembership());
        memberRepository.save(updatedMember);
    }

    @Override
    public Iterable<Member> listMembersForApprove() { return memberRepository.findByMembership(false); }

    @Override
    public Member findMemberUsername(String username) {
        return memberRepository.findByUsername(username);
    }
}
