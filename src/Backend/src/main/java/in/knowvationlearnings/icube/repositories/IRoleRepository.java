package in.knowvationlearnings.icube.repositories;

import in.knowvationlearnings.icube.models.ERole;
import in.knowvationlearnings.icube.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IRoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
}
