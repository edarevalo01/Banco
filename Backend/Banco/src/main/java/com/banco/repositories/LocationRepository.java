package com.banco.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.banco.entities.Location;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {

	public Iterable<Location> findAllByParent(Location parent);

}
