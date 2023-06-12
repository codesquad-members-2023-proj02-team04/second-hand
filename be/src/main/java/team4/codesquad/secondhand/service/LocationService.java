package team4.codesquad.secondhand.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team4.codesquad.secondhand.domain.Location;
import team4.codesquad.secondhand.domain.dto.LocationDTO;
import team4.codesquad.secondhand.domain.dto.LocationListDTO;
import team4.codesquad.secondhand.repository.LocationRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class LocationService {

    private final LocationRepository locationRepository;


    public LocationListDTO buildLocationListDTO() {
        List<Location> locations = locationRepository.findAll();
        return new LocationListDTO(locations.stream()
                                        .map(LocationDTO::new)
                                        .collect(Collectors.toList()));
    }
}
