package team4.codesquad.secondhand.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team4.codesquad.secondhand.domain.Location;
import team4.codesquad.secondhand.repository.LocationRepository;
import team4.codesquad.secondhand.service.dto.LocationListDTO;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class LocationService {

    private final LocationRepository locationRepository;


    public LocationListDTO buildLocationListDTO() {
        List<Location> locations = locationRepository.findAll();
        return new LocationListDTO(locations);
    }

    public Location findBy(Integer locationId) {
        return locationRepository.findById(locationId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 지역 정보 입력"));
    }

}