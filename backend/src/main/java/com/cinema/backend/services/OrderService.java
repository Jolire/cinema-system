package com.cinema.backend.services;

import com.cinema.backend.exceptions.OrderException;
import com.cinema.backend.models.Order;
import com.cinema.backend.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public Order createOrder(Order newOrder) {
        if (newOrder.getSeat() == null || newOrder.getSeat().isEmpty()) {
            throw new OrderException("No seats selected");
        }

        // проверяем каждый выбранный seat
        for (Integer s : newOrder.getSeat()) {
            if (s == null || s < 0) {
                throw new OrderException("Invalid seat number: " + s);
            }
        }
        return orderRepository.save(newOrder);
    }
}
