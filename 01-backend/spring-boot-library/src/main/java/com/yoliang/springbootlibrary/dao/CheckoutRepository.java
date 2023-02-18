package com.yoliang.springbootlibrary.dao;

import com.yoliang.springbootlibrary.entity.Checkout;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CheckoutRepository extends JpaRepository<Checkout, Long> {

    Checkout findByUserEmailAndBookId(String useremail, Long bookId);

    List<Checkout> findBooksByUserEmail(String userEmail);
}