#include "DHT.h"
#include <SoftwareSerial.h>

#define DHTPIN A0

#define DHTTYPE DHT11 //DHT 11

DHT dht (DHTPIN, DHTTYPE);

int period0 = 6000;
int period1 = 2000;
int period2 = 4000;

unsigned long time_now = 0;


void setup()
{
  Serial.begin(9600);
  dht.begin();
  pinMode(2, OUTPUT);
   pinMode(3, OUTPUT);
   pinMode(6, OUTPUT);
   pinMode(9, OUTPUT);



}


void loop()
{

  float h = dht.readHumidity();
  float t = dht.readTemperature();
  
 
    Serial.print(t);
    Serial.print(":");
    Serial.println(h);
    delay(10000);
 


 /*  digitalWrite(2, HIGH);
   digitalWrite(3, HIGH);
   digitalWrite(6, HIGH);
   digitalWrite(9, HIGH);*/






  //começa o loop;
 /*digitalWrite(2, LOW);

  time_now = millis();
  while (millis() < time_now + period0) {
     Serial.println("to funcionando low pino  2");
  }
  digitalWrite(2, HIGH);
  time_now = millis();
  while (millis() < time_now + period1) {
    Serial.println("to funcionando high pino 2");
  }
  digitalWrite(3, LOW);
  time_now = millis();
  while (millis() < time_now + period0) {
    Serial.println("to funcionando  low pino 3");
  }
  digitalWrite(3, HIGH);
  time_now = millis();
  while (millis() < time_now + period1) {
    
  }
  digitalWrite(6, LOW);
  time_now = millis();
  while (millis() < time_now + period0) {
   
  }
  digitalWrite(6, HIGH);
  time_now = millis();
  while (millis() < time_now + period2) {
  
  }
  digitalWrite(9, LOW);
  time_now = millis();
  while (millis() < time_now + period0) {
  
  }
  digitalWrite(9, HIGH);
  time_now = millis();
  while (millis() < time_now + period1) {
  
  }*/
}
