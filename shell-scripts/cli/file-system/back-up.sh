#!/bin/bash
OF=delivery_backup_$(date +%Y%m%d).tar.gz
tar -czf $OF /home/jaime/Documents/delivery
