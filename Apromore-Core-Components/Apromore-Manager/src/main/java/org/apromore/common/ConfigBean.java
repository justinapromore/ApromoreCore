/*-
 * #%L
 * This file is part of "Apromore Core".
 * 
 * Copyright (C) 2012 - 2017 Queensland University of Technology.
 * %%
 * Copyright (C) 2018 - 2021 Apromore Pty Ltd.
 * %%
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Lesser Public License for more details.
 * 
 * You should have received a copy of the GNU General Lesser Public
 * License along with this program.  If not, see
 * <http://www.gnu.org/licenses/lgpl-3.0.html>.
 * #L%
 */

package org.apromore.common;

public class ConfigBean {
    private String logsDir = "../Event-Logs-Repository";
    private String numOfEvent;
    private String numOfTrace;
//    Fallback Storage path
    private String storagePath = "FILE::../Event-Logs-Repository";
    private boolean sanitizationEnabled = false;

    public String getLogsDir() {
        return logsDir;
    }

    public void setLogsDir(final String logsDir) {
        this.logsDir = logsDir;
    }

    public String getNumOfEvent() {
        return numOfEvent;
    }

    public void setNumOfEvent(final String numOfEvent) {
        this.numOfEvent = numOfEvent;
    }

    public String getNumOfTrace() {
        return numOfTrace;
    }

    public void setNumOfTrace(final String numOfTrace) {
        this.numOfTrace = numOfTrace;
    }

    public String getStoragePath() {
        return storagePath;
    }

    public void setStoragePath(String storagePath) {
        this.storagePath = storagePath;
    }
    
    public boolean isSanitizationEnabled() {
        return sanitizationEnabled;
    }

    public void setSanitizationEnabled(final boolean sanitizationEnabled) {
        this.sanitizationEnabled = sanitizationEnabled;
    }
}
