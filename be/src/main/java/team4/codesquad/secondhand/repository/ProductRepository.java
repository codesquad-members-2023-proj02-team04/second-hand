package team4.codesquad.secondhand.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import team4.codesquad.secondhand.domain.Product;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Query(value = "select p from Product p " +
            "left join fetch p.location " +
            "left join fetch p.category " +
            "left join fetch p.user ")
    List<Product> findAll();


    @Query("SELECT p FROM Product p " +
            "LEFT JOIN FETCH p.user " +
            "LEFT JOIN FETCH p.category " +
            "WHERE p.productId = :productId")
    Optional<Product> findByIdWithRelatedFields(@Param("productId") Integer productId);

    @Modifying
    @Query("UPDATE Product p set p.views = p.views + 1 WHERE p.productId = :productId")
    int updateViews(@Param("productId") Integer productId);
}
