/*
 * Academic License - for use in teaching, academic research, and meeting
 * course requirements at degree granting institutions only.  Not for
 * government, commercial, or other organizational use.
 *
 * File: InputHPFilter.c
 *
 * Code generated for Simulink model 'InputHPFilter'.
 *
 * Model version                  : 1.1
 * Simulink Coder version         : 9.1 (R2019a) 23-Nov-2018
 * C/C++ source code generated on : Mon Mar  6 13:50:19 2023
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: ARM Compatible->ARM 7
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 * Validation result: Not run
 */

#include "InputHPFilter.h"

/* Block signals and states (default storage) */
DW rtDW;

/* External inputs (root inport signals with default storage) */
ExtU rtU;

/* External outputs (root outports fed by signals with default storage) */
ExtY rtY;

/* Real-time model */
RT_MODEL rtM_;
RT_MODEL *const rtM = &rtM_;

/* Model step function */
void InputHPFilter_step(void)
{
  real_T denAccum;

  /* S-Function (sdspbiquad): '<Root>/InputHP' incorporates:
   *  Inport: '<Root>/In1'
   */
  denAccum = (0.99835070206782361 * rtU.In1 - -1.9966986839501282 *
              rtDW.InputHP_FILT_STATES[0]) - 0.99670412432116606 *
    rtDW.InputHP_FILT_STATES[1];

  /* Outport: '<Root>/Out1' incorporates:
   *  S-Function (sdspbiquad): '<Root>/InputHP'
   */
  rtY.Out1 = (-2.0 * rtDW.InputHP_FILT_STATES[0] + denAccum) +
    rtDW.InputHP_FILT_STATES[1];

  /* S-Function (sdspbiquad): '<Root>/InputHP' */
  rtDW.InputHP_FILT_STATES[1] = rtDW.InputHP_FILT_STATES[0];
  rtDW.InputHP_FILT_STATES[0] = denAccum;
}

/* Model initialize function */
void InputHPFilter_initialize(void)
{
  /* (no initialization code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
