package me.shinsunyoung.springbootdeveloper.repository;

import me.shinsunyoung.springbootdeveloper.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    // select id, email 1개 가져오기
    // Optional<User> findByIdAndEmail(Long id, String email);

    // findByNicknameAndAge

    // findByNameOrAge

    // findByAgeGreaterThan

    // findByNameIsNull
}