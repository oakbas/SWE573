package com.fcproject.service;

import com.fcproject.model.Member;

/**
 * Created by ozlemakbas on 08/04/16.
 */
public interface MemberService {
    Iterable<Member> listAllMembers();

    Member getMemberById(Integer id);

    Member saveMember(Member member);
}
