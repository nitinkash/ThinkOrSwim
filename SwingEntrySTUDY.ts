# SWINGENTRY
# WGRIFFITH2 (C) 2013

INPUT AVGVOL = 60;
INPUT OVERBOUGHT = 40;
INPUT PRICE = CLOSE;

# DEFINING ENTRY
DEF KPERIOD = 14;
DEF DPERIOD = 3;
DEF FASTLINE = ROUND(SIMPLEMOVINGAVG(100 * ((CLOSE - LOWEST(LOW, KPERIOD)) / (HIGHEST(HIGH, KPERIOD) - LOWEST(LOW, KPERIOD))), LENGTH = DPERIOD));
DEF SLOWLINE = ROUND(SIMPLEMOVINGAVG(SIMPLEMOVINGAVG(100*((CLOSE-LOWEST(LOW,KPERIOD))/(HIGHEST(HIGH,KPERIOD)-LOWEST(LOW,KPERIOD))), LENGTH = DPERIOD), LENGTH = DPERIOD));
DEF STOCH = FASTLINE > SLOWLINE AND (FASTLINE[1] <= 20 OR FASTLINE[2] <= 20);

DEF RSI = RSIWILDER()[1] <= 40;

DEF CHANGE = CLOSE > CLOSE[1];

DEF BUYSIGNAL = VOLUMEAVG(LENGTH = AVGVOL) > VOLUMEAVG(LENGTH = AVGVOL).VOLAVG AND CHANGE IS TRUE;

DEF ENTRY = BUYSIGNAL AND RSI AND STOCH;

PLOT ABOVE = ENTRY;

ABOVE.SETDEFAULTCOLOR(CREATECOLOR(0, 255, 0));
ABOVE.SETPAINTINGSTRATEGY(PAINTINGSTRATEGY.BOOLEAN_ARROW_UP);

#########################################